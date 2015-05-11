$(document).ready(function() {
// Creates the test object
var a_test = new Cohorts.Test({
name: 'a_test', // Sets the global test name
scope: 1, // Sets the scope for the test. 1: Visitor, 2: Session, 3: Page
cv_slot: 5, // Sets the custom variable slot used - not used in this test but useful for more advanced tracking
sample: 1, // Sets the total amount of people included in the test 1=100%, 0.3=30% etc.
cohorts: {
// The next line sets the name of the variant
variation_a: {
onChosen: function() {
// Following line makes the change for this variant
// Using jQuery target an element and edits the html it contains
// This could target any .class, #id or element you wanted
// It could make any edits you wanted like CSS changes or content changes
$('#signup-button').html('Sign Up!');
// Additional lines of code could be added here if multiple edits were required
}
},
variation_b: {
onChosen: function() {
// Following line makes the change for this variant
$('#signup-button').html('Get Access!');
}
},
},
});
// This function triggers when the target element is clicked to track conversions
$('#signup-button').click(function() {
// Track any events with your storage adapter
a_test.event('Clicked on Button'); // You can send any message you like
});
// Add more test objects as you need by setting var test = new Cohorts.Test()
});