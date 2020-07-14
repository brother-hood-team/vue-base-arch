const permisos: any = {
  bind: function (el: any, binding: any, vNode: any) {
    const permisosUser = getPermisos(vNode.componentInstance.$store);
    const permisosCheck: Array<any> = binding.value;
    const {arg} = binding;
    const check = checkForArgs(arg, permisosUser, permisosCheck);
    debugger;
    if (!check) {
      el.style.display = 'none';
    }


  }
};

const getPermisos = (store: any): Array<any> => {
  return store.getters["@onei.login/authorities"];
};

const checkForArgs = (args: String, permisosUser: Array<any>, permisosCheck: Array<any>) => {
  let check;
  switch (args) {
    case 'only': {
      check = checkForOnlyArgs(permisosUser, permisosCheck);
      break;
    }
    case 'except': {
      check = checkForExceptArgs(permisosUser, permisosCheck);
      break;
    }
    default: {
      check = true;
    }

  }
  return check;
};

const checkForOnlyArgs = (permisosUser: Array<any>, permisosCheck: Array<any>) => {
  return permisosCheck.length > 0 ? permisosCheck.some((e) => {
    return permisosUser.includes(e);
  }) : true;
};

const checkForExceptArgs = (permisosUser: Array<any>, permisosCheck: Array<any>) => {
  return !checkForOnlyArgs(permisosUser, permisosCheck);
};

export {permisos};
