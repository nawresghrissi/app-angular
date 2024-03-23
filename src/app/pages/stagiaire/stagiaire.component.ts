import { Component } from '@angular/core';
import { StagiaireService } from '../../core/service';

@Component({
  selector: 'app-stagiaire',
  standalone: true,
  imports: [],
  templateUrl: './stagiaire.component.html',
  styleUrl: './stagiaire.component.scss'
})
export class StagiaireComponent {
addStagiaire(arg0: any) {
throw new Error('Method not implemented.');
}
stagiaire: any;
updateStagiaire(arg0: any) {
throw new Error('Method not implemented.');
}


  stagiaires: any= [];


  constructor(private stagiaireService: StagiaireService ){ }

  ngOnInit(){
    this.getAllStagiaires();
    
  }
  getAllStagiaires(){
    this.stagiaireService.getAllStagiaire().subscribe((res)=>{
      console.log(res);
      this.stagiaires = res;
    })
  }
  deleteStagiaire(id: number){
    this.stagiaireService.deleteStagiaire(id).subscribe((res)=> {
      console.log(res);
   })
 }

}

