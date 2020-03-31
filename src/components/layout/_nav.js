export default [
  {
    _name: "CSidebarNav",
    _children: [
      {
        _name: "CSidebarNavItem",
        name: "Home",
        to: "/",
        icon: "cil-home",
        badge: {
          color: "primary",
          text: "NEW"
        }
      },
      {
        _name: "CSidebarNavTitle",
        _children: ["Metadata"]
      },
      {
        _name: "CSidebarNavItem",
        name: "Referential",
        to: "/referential",
        icon: "cil-layers"
      },
      {
        _name: "CSidebarNavItem",
        name: "Structural",
        to: "/structural",
        icon: "cil-layers"
      },
      {
        _name: "CSidebarNavItem",
        name: "Process",
        to: "/process",
        icon: "cil-layers"
      }
    ]
  }
];
