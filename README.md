# Ember InfiniteTableView

Table view with similar style to iOS UITableView.

`InfiniteTableView` may incluye a header or footer that *performs* actions to the component.

[Demo](http://jdmartinez.github.io/ember-infinite-table-view/examples/searching "Demo")

## Dependencies

* jQuery
* Twitter Bootstrap
* Handlebars
* Ember.js

## Usage

The easiest way to create an `InfiniteTableView` is via a template.

```handlebars
{{#infinite-table-view controllerBinding="controller"}}

    {{infinite-table-view-header}}        

    {{infinite-table-view-items}}                

    {{infinite-table-view-footer}}        

{{/infinite-table-view}}      
```   
To access to controller within any section of `InfiniteTableView`, you have to include *content* inside or via binding property. 

```handlebars
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
```
## Roadmap

* Infinite pagination
