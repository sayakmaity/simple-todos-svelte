import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.svelte';

/* runs to start the app */
Meteor.startup(() => {
  // eslint-disable-next-line no-new
  new App({
    target: document.getElementById('app'),
  });
});
