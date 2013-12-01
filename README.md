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
        <div class="form-group input-group">      
          {{view Ember.TextField placeholder="Search" class="form-control" valueBinding="controller.searchText"}}
          <span class="input-group-addon">
            <i class="glyphicon glyphicon-search"></i>
          </span>
        </div>
      {{/infinite-table-view-header}}
                
      {{#infinite-table-view-items}}                
        {{#each item in items}}
          {{infinite-table-view-item item=item}}
        {{/each}}
      {{/infinite-table-view-items}}
      
    {{/infinite-table-view}}      
  </script>
    
  <script type="text/x-handlebars" data-template-name="components/infinite-table-view-header">        
    {{yield}}
  </script>
  
  <script type="text/x-handlebars" data-template-name="components/infinite-table-view">           
    {{yield}}
  </script>
    
  <script type="text/x-handlebars" data-template-name="components/infinite-table-view-items">
    {{yield}}
  </script>    
  
  <script type="text/x-handlebars" data-template-name="components/infinite-table-view-item">        
    <a href="#">
      <img {{bindAttr src=item.avatar_url alt=item.login}} class="img-circle avatar">
      <h4 class="list-group-item-heading">{{item.login}}</h4>
      <div class="list-group-item-text">{{item.type}}</div>
    </a> 
  </script>  
```
## Roadmap

* Infinite pagination
