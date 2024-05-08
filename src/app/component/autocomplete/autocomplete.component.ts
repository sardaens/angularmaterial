import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MasterService } from 'src/app/service/master.service';
import { colorentity } from 'src/app/Entity/colorentity';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {


  colorarraylist!:colorentity[];

  filteroptions!:Observable<string[]>
  filteroptionsList!:Observable<colorentity[]>
  formcontrol= new FormControl('');

  constructor(private service:MasterService){
    this.colorarraylist=this.service.GetColorList();
  }

  ngOnInit(): void {
    // on definit un observable qui retour la liste des valeurs filtrées / chgt de valeur sur formcontrol
    this.filteroptionsList = this.formcontrol.valueChanges.pipe(
      startWith(''), map(value=> this._FILTER(value||'')));

  }

  private _FILTER(value:string):colorentity[] {
    const searchValue=value.toLocaleLowerCase();
    return this.colorarraylist.filter(option=>option.name.toLocaleLowerCase().includes(searchValue));

  }
}
