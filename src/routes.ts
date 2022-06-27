import {Request, Response} from 'express';
import CreateCourseService from './CreateCourseService';
/**
 * Instead of create the function inside the app.get in the server.ts, 
 * we just create it here and then export the logic to other functions.
 */
export function CreateCourse(request: Request, response: Response){
    CreateCourseService.execute({
        name: "nodejs",
        duration: 10,
        educator: "Dani"
    });
    return response.send();
}