import { Component, OnInit, Renderer2 } from '@angular/core'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  //styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    console.log("DashboardComponent chargé !");

    // Charger dynamiquement les scripts nécessaires pour le Dashboard
    this.loadScript("assets/js/pcoded.min.js");
    this.loadScript("assets/js/vertical-layout.min.js");
    this.loadScript("assets/pages/dashboard/custom-dashboard.js");

    // Charger dynamiquement les styles CSS si nécessaire
    this.loadStyle("assets/css/style.css");
    this.loadStyle("assets/css/custom.css");
  }

  /**
   * Charge dynamiquement un fichier JavaScript
   * @param scriptUrl Chemin du script à charger
   */
  loadScript(scriptUrl: string) {
    const script = this.renderer.createElement('script');
    script.src = scriptUrl;
    script.type = 'text/javascript';
    script.async = true;
    this.renderer.appendChild(document.body, script);
  }

  /**
   * Charge dynamiquement un fichier CSS
   * @param styleUrl Chemin du fichier CSS à charger
   */
  loadStyle(styleUrl: string) {
    const link = this.renderer.createElement('link');
    link.rel = 'stylesheet';
    link.href = styleUrl;
    this.renderer.appendChild(document.head, link);
  }

}
