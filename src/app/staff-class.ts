export class StaffClass {
    public isvalid = "";
    public description = "";
  
    constructor(isvalid: string, description: string) {
    }
  
    public set radio(isvalid: string) {
      this.isvalid = isvalid;
  
    }
  
  
    public set message(description: string) {
      this.description = description;
    }
  
  
  
    public get radio() {
      return this.isvalid;
    }
    public get descrip() {
      return this.description;
    }
  
}


