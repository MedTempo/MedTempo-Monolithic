import { inject, isDevMode } from "@angular/core"
import { isPlatform } from "@ionic/angular";

import { Router } from "@angular/router";


function redirectToApp(){
  const router = inject(Router)

  router.navigate([`/app`])
}


export function IsNotMobileService(): boolean{

  if(isDevMode() === true){
    redirectToApp()
    return false
  }

  if (isPlatform(`mobile`) == false) {
    return true
  } else {
    redirectToApp()
    return false
  }
}

/*
export function IsMobileService(): boolean{
  if ( isPlatform(`mobile`)  || isDevMode() == true) {
    return true
  } else {
    return false
  }
}
*/

