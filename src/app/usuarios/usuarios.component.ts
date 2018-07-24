import { Component, OnInit, Sort} from '@angular/core';

import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit{

  users = [];
  displayedColumns = ['nome', 'documento', 'tipo', 'dataExpiracao'];

  constructor(private userService: UserService) { }

  ngOnInit() {
    let defaultSort: Sort = {};
    
    this.loadUsers();
    this.users.sort((l, r) => (l.nome > r.nome ? -1 : 1));
  }

  loadUsers(){
    this.userService.getAll().subscribe(data => this.users = data);
  }

}
