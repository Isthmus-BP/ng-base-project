import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  fruta: string;
  imgSrc: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(queryParams => {
      this.fruta = queryParams.get("fruta");
      switch (this.fruta) {
        case "pina":
          this.imgSrc =
            "https://media.istockphoto.com/photos/pineapple-isolated-picture-id90965948?k=6&m=90965948&s=612x612&w=0&h=hbUfhxwZe3-yJ20Xkeo8pns9nMU0iHARNV0yIGu86WY=";
          break;
        case "mango":
          this.imgSrc = "https://freepngimg.com/thumb/mango/1-2-mango-png.png";
          break;
        case "fresa":
          this.imgSrc =
            "https://static9.depositphotos.com/1642482/1149/i/450/depositphotos_11491656-stock-photo-strawberry.jpg";
          break;
      }
    });
  }
}
