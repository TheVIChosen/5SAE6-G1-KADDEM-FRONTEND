import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../../../services/equipe.service';
import { Equipe } from '../../../models/equipe.model';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  equipes: Equipe[] = [];

  constructor(private equipeService: EquipeService) {}

  ngOnInit(): void {
    this.loadEquipes();
  }

  loadEquipes() {
    this.equipeService.getEquipes().subscribe(data => {
      this.equipes = data;
    });
  }
}
