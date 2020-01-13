export interface NavData {
  name: string;
  url: string;
  icon: string;
}

export const navItems: NavData[] = [
  {
    name: "Inicio",
    url: "/app/inicio",
    icon: "icon-speedometer"
  },
  {
    name: "Perfil",
    url: "/app/perfil",
    icon: "icon-speedometer"
  },
  {
    name: "Promociones",
    url: "/app/promociones",
    icon: "icon-speedometer"
  }
];
