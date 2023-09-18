import { Component } from '@angular/core';

@Component({
  selector: 'app-technician-table',
  templateUrl: './technician-table.component.html',
  styleUrls: ['./technician-table.component.css']
})
export class TechnicianTableComponent {

    logout(){
    localStorage.removeItem('logindata')
  }

  data={
    status:''
  }

  technicians = [
    {tech_id:25897486,name:'John',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck' },
    {tech_id:25999486,name:'Sam',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:25997850,name:'Tebogo',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:25997936,name:'Xolile',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:25997859,name:'Sifiso',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:25997958,name:'Matthews',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:25998851,name:'Mpho',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:21990052,name:'Lesego',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:21894865,name:'Leon',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:21914818,name:'Thabani',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:21915811,name:'Dumisani',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:21918965,name:'Katlego',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:21518934,name:'Khumo',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:21911168,name:'Khumo',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:21911060,name:'Samkelo',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:21611061,name:'Sbusiso',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:21711162,name:'Lebogang',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:21766660,name:'Lesiba',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:21666456,name:'Lesedi',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:21616051,name:'Jimmy',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:21916011,name:'Jonathan',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:21918052,name:'Phil',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:21913457,name:'Jason',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:21913457,name:'Jason',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'},
    {tech_id:21933400,name:'Jerah',surname:'Black',phone:'0124578987',email:'john@tut.ac.za',gender:'male',availability:'available',division_id:1,campus:'Soshanguve South',password:'john%Bl@ck'}

    // Add more technicians as needed
  ];

  log(event:any, id:Number){}

}
