import { UniversityInterface } from "./university.interface";

export class UniversityImpl implements UniversityInterface{
    private collegeName!:string;
    addCollege(collegeName: string): void {
        this.collegeName = collegeName;
    }
    getCollege(): string {
        return this.collegeName;
    }
   
}