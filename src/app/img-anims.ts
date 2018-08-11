import {animate, state, style, transition} from '@angular/animations';

export const zoom = (

  {
    duration,
    initScale,
    initOpacity,
    easing
  }: {
    duration: number | string,
    initScale: number,
    initOpacity: number,
    easing: string
  } = {
    duration: 300,
    initScale: 0,
    initOpacity: 0,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  }
) => [
  state('not_loaded', style({
    transform: `scale(${initScale})`,
    opacity: initOpacity
  })),
  state('loaded', style({
      transform: 'scale(1)',
      opacity: 1.
    }),
  ),
  state('error', style({
      background: 'red'
    }),
  ),
  transition( '* => loaded',  [
    animate(duration + ' ' + easing )
  ])
];
