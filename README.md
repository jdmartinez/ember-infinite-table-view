# Ember InfiniteTableView

Table view with similar style to iOS UITableView

## Dependencies

* jQuery
* Twitter Bootstrap
* Handlebars
* Ember.js

## Usage

```handlebars
<script type="text/x-handlebars" data-template-name="users">
    {{#infinite-table-view controllerBinding="controller"}}
    
        {{#infinite-table-view-header}}        
            <!-- Header content goes here -->  
        {{/infinite-table-view-header}}
                
        {{#infinite-table-view-items}}                
            {{#each item in items}}
                {{infinite-table-view-item item=item}}
            {{/each}}
        {{/infinite-table-view-items}}
      
      {{#infinite-table-view-footer}}        
        <!-- Footer content goes here -->  
      {{/infinite-table-view-footer}}
      
    {{/infinite-table-view}}      
</script>
      
```
## Roadmap

* Infinite pagination
