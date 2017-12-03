import { trigger, transition, style, animate, state, keyframes, query, stagger} from '@angular/animations'

export let fade = trigger('fade', [
  state('in', style({transform: 'translateX(0)'})),
  transition('void => *', [
    animate('.6s ease-in', keyframes([
      style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
      style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
      style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
    ]))
  ]),
  transition('* => void', [
    animate('.6s ease-out', keyframes([
      style({opacity: 1, transform: 'translateY(0)', offset: 0}),
      style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
      style({opacity: 0, transform: 'translateY(-75%)', offset: 1.0}),
    ]))
  ])
])

  export let fadeVertically = trigger('fadeVertically', [
    transition('void => *', [
      style({ transform: 'translateY(-25px) scale(0.9)',opacity : 0}),
      animate(800, style({ transform:  'translateY(0) scale(1.0)', opacity : 1})
      )
    ]),
    
    transition('* => void', [
      animate(800, style({  transform: 'translateY(-25px)  scale(0.9)', opacity : 0})
      )
    ]),
  ]);

 export let goals = trigger('goals', [
    transition('* => *', [

      query(':enter', style({ opacity: 0 }), {optional: true}),

      query(':enter', stagger('300ms', [
        animate('.6s ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
        ]))]), {optional: true})
        ,
      query(':leave', stagger('300ms', [
        animate('.6s ease-out', keyframes([
          style({opacity: 1, transform: 'translateY(0)', offset: 0}),
          style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
          style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
        ]))]), {optional: true})
    ])
  ])
    

