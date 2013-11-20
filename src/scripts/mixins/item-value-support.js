var get = Ember.get;

/**
 * 
 * ItemValueSupport
 * 
 * */ 
Ember.ItemValueSupport = Ember.Mixin.create({
    
    value: function () {
        
        var parentView = this.get('parentView');
        var content = this.get('content');
        
        if (!parentView) return null;

        var valueKey = get(parentView, 'itemValueKey') || 'value';
        
        return get(content, 'valueKey') || content;
        
    }.property('content').cacheable()
    
});

