/**
 * 
 * ItemSelectionSupport
 * 
 * */ 
Ember.ItemSelectionSupport = Ember.Mixin.create(Ember.ItemValueSupport, {
    
    attributeBindings: ['isActive:active'],
    
    allowSelection: true,
    
    /**
     * isActive
     * */
    isActive: function () {
    
        var parentView = this.get('parentView');
        
        if (!parentView) return null;
    
        var selection = this.get('parentView.selection');
        var value = this.get('value');
        
        return selection === value;
        
    }.property('parentView.selection', 'value').cacheable(),
    
    /**
     * click
     * */
    click: function (event) {
    
        var value = this.get('value');
        var allowSelection = this.get('parentView.allowSelection');
        var selection = this.get('parentView.selection');
    
        if (!allowSelection && selection === value) {
            value = null;
        }
                                                
        this.set('parentView.selection', value);

        return true;
    }
    
});

