App = Ember.Application.create();

App.Router.map(function() {
  this.resource('users');
});

/* Routes */
App.IndexRoute = Ember.Route.extend({

  beforeModel: function () {
    this.transitionTo('users');
  }

});

App.UsersRoute = Ember.Route.extend({
  
  model: function() {
    return Ember.$.getJSON('https://api.github.com/orgs/emberjs/members');
  },
  
  setupController: function(controller, model) {
    
    controller.set('content', model);
  }
  
});

/**
**/
App.SearchingSupport = Ember.Mixin.create({
  
  searchText: '', 
  
  searchProperties: Ember.A(),
  
  filterableContentBinding: 'content',
  
  filteredContent: function () {

    var searchText = this.get('searchText');
    var sProps = this.get('searchProperties');
    var regExp = new RegExp(searchText, 'gi');
    
    if (!searchText) return this;
    
    return this.get('filterableContent').filter(function(item) {      

      var props = Ember.Object.create(item).getProperties(sProps);
      
      for (var p in props) {
        if ( props[p] && props[p].toString().match(regExp)) {
          return true;
        }
      }
      
      return false;

    });

  }.property('searchText', 'searchProperties', 'filterableContent')
  
});

App.UsersController = Ember.ArrayController.extend(App.SearchingSupport, {

  searchProperties: Ember.A(['login']),

  itemsBinding: 'filteredContent'

});

/** 
  `InfiniteTableViewComponent`
  
  Lista de elementos que se asemejan a UITableView de iOS.
  La lista puede tener una cabecera y un pie que realizan acciones sobre la misma.
  
  El modo mas facil de crear un `InfiniteTableViewComponent` es mediante una plantilla,
  como por ejemplo:
  
  ```html
  {{infinite-table-view items=model}}
  ```
  
  Tambien se puede decidir que elementos mostrar:
  
  ```html
  {{#infinite-table-view items=model}}
    {{infinite-table-view-header}}    
    
    {{#infinite-table-view-items}}          
      {{#each item in items}}
        {{infinite-table-view-item}}
      {{/each}}
    {{/infinite-table-view-items}}
    
    {{infinite-table-view-footer}}
  {{/infinite-table-view items=model}}
  ```    
  
  @class        InfiniteTableViewComponent
  @namespace    App
  @extends      Ember.Component    
  
**/

App.InfiniteTableViewComponent = Ember.Component.extend({
  
  tagName: 'section',
  
  classNames: ['ui-table-view'],
    
  itemsBinding: 'filteredContent'
  
});

/** 
  `InfiniteTableViewItemsComponent`
  
  Lista de elementos que se asemejan a UITableView de iOS.
  
  @class        InfiniteTableViewItemsComponent
  @namespace    App
  @extends      Ember.Component
  
**/
App.InfiniteTableViewItemsComponent = Ember.Component.extend({
  
  tagName: 'ul',
  
  classNames: ['list-group'],
  
  itemViewClass: App.InfiniteTableViewComponent.extend()
  
});

/** 
  `InfiniteTableViewItemComponent`
  
  Elemento de un `InfiniteTableViewItemsComponent`
  
  @class        InfiniteTableViewItemComponent
  @namespace    App
  @extends      Ember.Component
  
**/
App.InfiniteTableViewItemComponent = Ember.Component.extend({
  
  tagName: 'li',
  
  classNames: ['list-group-item'],
  
  classNameBindings: ['isSelected:active'],
  
  isSelected: false,
      
  click: function() {    
    
    this.send('selectItem');
    
  },
  
  actions: {
    
    selectItem: function () {      
      
      this.toggleProperty('isSelected');                  
      
    }
    
  }
  
});

/** 
  `InfiniteTableViewHeaderComponent`
  
  Cabecera de una `InfiniteTableViewComponent`
  
  @class        InfiniteTableViewHeaderComponent
  @namespace    App
  @extends      Ember.Component
  
**/
App.InfiniteTableViewHeaderComponent = Ember.Component.extend({
  
  tagName: 'header',
  
  classNames: ['list-group-header']
  
});

/** 
  `InfiniteTableViewFooterComponent`
  
  Pie de una `InfiniteTableViewComponent`
  
  @class        InfiniteTableViewFooterComponent
  @namespace    App
  @extends      Ember.Component
  
**/
App.InfiniteTableViewFooterComponent = Ember.Component.extend({
  
  tagName: 'footer',
  
  classNames: ['list-group-footer']
  
});