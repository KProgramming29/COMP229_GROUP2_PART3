/*! 
Defining a schema for a survey for MongoDB
*/

// Import Mongoose
import mongoose from "mongoose";
const Schema = mongoose.Schema; // Alias for mongoose.Schema

// Create a Schema that matches the data
const SurveySchema = new Schema(
    {
        dateStart: Date,
        dateEnd: Date,
        title: String,
        type: String,
        author: String,
        user: String,
        questionsBloc: [{
            question: String,
            options: [String]
        }],
        answerBloc: [{
            answer: [Number]
        }],
        isActive: Boolean
    },
    {
        collection: "surveys"
    }
);

// Define index at schema level for alphabetical sorting on title
SurveySchema.index({ title: 1 });

// Create a Model using the Schema
const Model = mongoose.model("Survey", SurveySchema);

// Export the Model (to create a module from this file)
export default Model;