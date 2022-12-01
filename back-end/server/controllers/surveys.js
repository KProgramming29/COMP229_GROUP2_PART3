"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessEditPage = exports.ProcessAddPage = exports.DisplayEditPage = exports.DisplayAddPage = exports.DisplaySurveys = void 0;
const survey_1 = __importDefault(require("../models/survey"));
function DisplaySurveys(req, res, next) {
    survey_1.default.find(function (err, surveyCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json(surveyCollection);
    });
}
exports.DisplaySurveys = DisplaySurveys;
function DisplayAddPage(req, res, next) {
    res.json({ success: true, message: 'Add page displayed succesfully' });
}
exports.DisplayAddPage = DisplayAddPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    survey_1.default.findById(id, {}, {}, function (err, surveyToEdit) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, message: 'Edit page displayed succesfully', survey: surveyToEdit });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function ProcessAddPage(req, res, next) {
    let newSurvey = new survey_1.default({
        
            "Startdate": new Date(req.body.Startdate),
            "Enddate": new Date(req.body.Enddate),
            "title": req.body.title,
            "type": req.body.type,
            "username": req.body.username,
            
            "question": req.body.question
    });
    newSurvey.isActive = true;
    survey_1.default.create(newSurvey, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, message: 'Successfully created survey!', survey: newSurvey });
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedSurvey = new survey_1.default({
        "_id": id,
        "Startdate": new Date(req.body.Startdate),
        "Enddate": new Date(req.body.Enddate),
        "title": req.body.title,
        "type": req.body.type,
        "username": req.body.username,
        
        "question": req.body.question
    });
    survey_1.default.updateOne({ _id: id }, updatedSurvey, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        console.log(updatedSurvey);
        res.json({ success: true, message: 'Successfully edited survey!', survey: updatedSurvey });
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    survey_1.default.deleteOne({ _id: id }, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, message: 'Successfully deleted survey!' });
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=surveys.js.map