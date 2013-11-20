var get = Ember.get;

/**
 * 
 * ItemLinkSupport
 * 
 * */ 
Ember.ItemLinkSupport = Ember.Mixin.create({
    
    href: function () {
        
        var parentView = this.get('parentView');
        var content = this.get('content');
        
        if (parentView) {
            var hrefKey = get(parentView, 'itemHrefKey') || 'link';
            
            return get(content, 'hrefKey') || '#';
        }
        
        return content;
        
    }.property('content').cacheable()
    
});

