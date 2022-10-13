import { Mongo } from 'meteor/mongo';

/* Creating a new MongoDB collection called tasks. */
export const TasksCollection = new Mongo.Collection('tasks');
