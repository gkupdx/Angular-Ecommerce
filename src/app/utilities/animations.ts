import { trigger, state, transition, style, query, animate } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
    state('void', style({ opacity: 0 })),
    transition('void => *', [
        style({ opacity: 0 }),
        animate('0.6s ease-in-out', style({ opacity: 1 }))
    ]),
]);

export const fadeInSlow = trigger('fadeInSlow', [
    transition('void => *', [
        style({ opacity: 0 }),
        animate('2s 300ms ease-in-out', style({ opacity: 1 })),
    ]),
]);

export const slideIn = trigger("slideIn", [
    transition("* => *", [
        style({ transform: 'translateX(100%)' }),
        animate('0.7s ease-in-out', style({ transform: 'translateX(0%)' }))
    ]),
]);

export const slideInSlow = trigger("slideInSlow", [
    transition("* => *", [
        style({ transform: 'translateX(100%)'}),
        animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
    ])
])

export const slideDown = trigger("slideDown", [
    transition("* => *", [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' })),
    ]),
]);

export const slideDownSlow = trigger("slideDownSlow", [
    transition("void => *", [
        style({ transform: 'translateY(-100%)'}),
        animate('1s ease', style({ transform: 'translateY(0%)'})),
    ]),
]);