import {animate, group, query, style, transition, trigger} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('home => detail', [
    query(':enter, :leave', style({position: 'fixed', width: '100%'}), {optional: true}),
    group([  // block executes in parallel
      query(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
      ], {optional: true}),
    ])
  ]),
  transition('detail => home', [
    query(':enter, :leave', style({position: 'fixed', width: '100%'}), {optional: true}),
    group([  // block executes in parallel
      query(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
      ], {optional: true}),
    ])
  ]),

  transition('home => se', [
    query(':enter, :leave', style({position: 'fixed', width: '100%'}), {optional: true}),
    group([
      query(':enter', [
        style({transform: 'translateX(100%) translateY(100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%) translateY(0%)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0%) translateY(0%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(-100%) translateY(-100%)'}))
      ], {optional: true}),
    ])
  ]),
  transition('se => home', [
    query(':enter, :leave', style({position: 'fixed', width: '100%'}), {optional: true}),
    group([
      query(':enter', [
        style({transform: 'translateX(-100%) translateY(-100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%) translateY(0%)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0%) translateY(0%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(100%) translateY(100%)'}))
      ], {optional: true}),
    ])
  ]),

  transition('home => sw', [
    query(':enter, :leave', style({position: 'fixed', width: '100%'}), {optional: true}),
    group([
      query(':enter', [
        style({transform: 'translateX(-100%) translateY(100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%) translateY(0%)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0%) translateY(0%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(100%) translateY(-100%)'}))
      ], {optional: true}),
    ])
  ]),
  transition('sw => home', [
    query(':enter, :leave', style({position: 'fixed', width: '100%'}), {optional: true}),
    group([
      query(':enter', [
        style({transform: 'translateX(100%) translateY(-100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%) translateY(0%)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0%) translateY(0%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(-100%) translateY(100%)'}))
      ], {optional: true}),
    ])
  ]),

  transition('home => ne', [
    query(':enter, :leave', style({position: 'fixed', width: '100%'}), {optional: true}),
    group([
      query(':enter', [
        style({transform: 'translateX(100%) translateY(-100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%) translateY(0%)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0%) translateY(0%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(-100%) translateY(100%)'}))
      ], {optional: true}),
    ])
  ]),
  transition('ne => home', [
    query(':enter, :leave', style({position: 'fixed', width: '100%'}), {optional: true}),
    group([
      query(':enter', [
        style({transform: 'translateX(-100%) translateY(100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%) translateY(0%)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0%) translateY(0%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(100%) translateY(-100%)'}))
      ], {optional: true}),
    ])
  ]),

  transition('home => nw', [
    query(':enter, :leave', style({position: 'fixed', width: '100%'}), {optional: true}),
    group([
      query(':enter', [
        style({transform: 'translateX(-100%) translateY(-100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%) translateY(0%)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0%) translateY(0%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(100%) translateY(100%)'}))
      ], {optional: true}),
    ])
  ]),
  transition('nw => home', [
    query(':enter, :leave', style({position: 'fixed', width: '100%'}), {optional: true}),
    group([
      query(':enter', [
        style({transform: 'translateX(100%) translateY(100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%) translateY(0%)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0%) translateY(0%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(-100%) translateY(-100%)'}))
      ], {optional: true}),
    ])
  ]),

]);
