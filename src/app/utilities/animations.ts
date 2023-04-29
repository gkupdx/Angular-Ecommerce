import { trigger, state, transition, style, animate, sequence, group, query } from '@angular/animations';

let browserWidth = window.innerWidth;

export const fadeIn = trigger('fadeIn', [
    state('void', style({ opacity: 0 })),
    transition('void => *', [
        style({ opacity: 0 }),
        animate('0.6s ease-in-out', style({ opacity: 1 }))
    ]),
]);

export const fadeInSlow = trigger('fadeInSlow', [
    state('void', style({ opacity: 0 })),
    state('end', style({ opacity: 1 })),
    transition(':enter', [
        animate('1s ease-in-out'),
    ]),
    transition('* => end', [
        animate('1s ease-in-out'),
    ]),
]);

export const slideIn = trigger("slideIn", [
    transition(':enter, empty => non-empty, non-empty => empty', [
        style({ transform: `translateX(${browserWidth}px)` }),
        animate('0.7s ease-in-out', style({ transform: `translateX(0)`})),
    ]),
    transition(':leave', [
        style({ transform: `translateX(0)`}),
        animate('0.7s ease-in-out', style({ transform: `translateX(-${browserWidth}px)` })),
    ]),
    transition(':increment', [
        style({ transform: `translateX(${browserWidth}px)`}),
        animate('0.7s ease-in-out', style({ transform: `translateX(0)`})),
    ]),
    transition(':decrement', [
        style({ transform: `translateX(-${browserWidth}px)`}),
        animate('0.7s ease-in-out', style({ transform: `translateX(0)`})),
    ]),
]);

export const slideOut = trigger("slideOut", [
    transition(':increment', [
        style({ transform: `translateX(0)` }),
        animate('0.7s ease-out', style({ transform: `translateX(-${browserWidth}px)` }))
    ]),
    transition(':decrement', [
        style({ transform: `translateX(0)` }),
        animate('0.7s ease-out', style({ transform: `translateX(${browserWidth}px)` }))
    ])
])

export const slideInSlow = trigger("slideInSlow", [
    transition("* => *", [
        style({ transform: 'translateX(100%)' }),
        animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
    ])
]);

export const slideDown = trigger("slideDown", [
    transition('hidden <=> visible', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0)' }))
    ]),
    transition(":enter", [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0)' })),
    ]),
]);

export const slideDownSlow = trigger("slideDownSlow", [
    transition(":enter", [
        style({ transform: 'translateY(-100%)' }),
        animate('1s ease', style({ transform: 'translateY(0%)' })),
    ]),
    transition(":leave", [
        style({ transform: 'translateY(0)' }),
        animate('1s ease', style({ transform: 'translateY(-100%)' })),
    ]),
]);