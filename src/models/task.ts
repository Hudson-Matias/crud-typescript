// models/Task.ts
class Task {
    constructor(public id: string, public title: string, public description: string, public creationDate: Date, public completionDate: Date | null, public type: string, public category: string | null, public status: string, public userId: string) {}
  }
  
  export default Task;
  