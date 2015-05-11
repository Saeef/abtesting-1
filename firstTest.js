$(document).ready(function() {



var bigsmall = new Cohorts.Test({
        name: 'bigsmall',
        scope: 1, // Sets the scope for the test and custom variable: 1: Visitor, 2: Session, 3: Page 
        cv_slot: 1, // Sets the custom variable slot used in the GoogleAnalyticsAdapter
        sample: 1, // we want to include all visitors in the test

        cohorts: {
            big: {
                onChosen: function() {
                    $('#big').show();
                    $('#signup-button').html('Sign Up!');
                }
            },
            small: {
                onChosen: function() {
                    $('#small').show();
                    $('#signup-button').html('Register');

                }
            }
        },

        storageAdapter: {
                 nameSpace: 'cohorts',
                 testName: 'bigsmall',
                 // The TrackEvent method is not run directly, it's triggered by onInitialize and onEvent
                 // onEvent appends some info to the label so that it can be distinguished as a conversion
                 trackEvent: function(category, action, opt_label, opt_value, int_hit, cv_slot, scope) { 
                    _gaq.push(['_trackEvent', category, action, opt_label, opt_value, int_hit]);    
                    _paq.push(['setCustomVariable', cv_slot , action ,opt_label]); // Piwik with a custom variable
                    _paq.push(['trackEvent', category , action ,opt_label, opt_value]); // Piwik with an event
                 },
                // onInitialize runs every time a test does
                // It tracks total users each variant was served to
                 onInitialize: function(inTest, testName, cohort, cv_slot, scope) {
                     if(inTest) {
                        this.trackEvent(this.nameSpace, testName, cohort, 0, true, cv_slot, scope);
                     }
                 },
                // onEvent runs when a conversion occurs
                 onEvent: function(testName, cohort, eventName) {
                        this.trackEvent(this.nameSpace, testName, cohort + ' | ' + eventName, 0, false);
                 }
        }


    });


    console.log(bigsmall);
    $('#big').click(function() {
        bigsmall.event('Clicked on Header');
    });

    $('#small').click(function() {
        bigsmall.event('Clicked on Header');
    });

});

