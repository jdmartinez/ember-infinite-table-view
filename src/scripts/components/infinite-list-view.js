/**
 * 
 * InfiniteListView
 * 
 * */ 
Ember.InfiniteListView = Ember.ContainerView.extend({
          
    classNames: ['infinite-list'],        
    
    itemViewClass: Ember.ItemView.extend(Ember.ItemSelection, {
        
        classNames: ['infinite-list-item'],
        
        template: Ember.Handlebars.compile(
            '{{view.image}}' + 
            '{{view.label}}' + 
            '{{view.detailLabel}}'
        )
        
    })
    
    
});

Ember.Handlebars.helper('infinite-list-view', Ember.InfiniteListView);


