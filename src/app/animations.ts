import { trigger, transition, style, animate, keyframes, query, stagger} from '@angular/animations'

export let fade = trigger('fade', [
    transition('void => *', [
      style({ transform: 'translateX(25px)',opacity : 0}),
      animate(600, style({ transform:  'translateX(0)', opacity : 1})
      )
    ]),
    
    transition('* => void', [
      animate(600, style({  transform: 'translateX(25px)', opacity : 0})
      )
    ]),
  ])

  export let fadeVertically = trigger('fadeVertically', [
    transition('void => *', [
      style({ transform: 'translateY(-25px) scale(0.8)',opacity : 0}),
      animate(600, style({ transform:  'translateY(0) scale(1.0)', opacity : 1})
      )
    ]),
    
    transition('* => void', [
      animate(600, style({  transform: 'translateY(-25px)  scale(0.8)', opacity : 0})
      )
    ]),
  ])

  export let globals = trigger('globals', [
    trigger('globals', [
    transition('* => *', [
      query(':enter', style({opacity: 0}), {optional: true}),

      query(':enter', stagger('3000ms', [
        animate('.6s ease-in', keyframes ([
          style({ opacity: 0, transform: 'translateY(-70%)',offset : 0}),
          style({ opacity: .5, transform: 'translateY(35px)',offset : .3}),
          style({ opacity: 1, transform: 'translateY(0)',offset : 0})


        ]))]), {optional: true}),

        query(':leave', stagger('3000ms', [
          animate('.6s ease-in', keyframes ([
            style({ opacity: 1, transform: 'translateY(0)',offset : 0}),
            style({ opacity: .5, transform: 'translateY(35px)',offset : .3}),
            style({ opacity: 0, transform: 'translateY(-75%)',offset : 1})
          ]))]), {optional: true})
        ])
  
      ])
  ]);
    

