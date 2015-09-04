blaze-chosen
--------------------------

Wraps `tsega:bootstrap3-datetimepicker`, so you can just `{{#datetimepicker}}<input />{{/datetimepicker}}` and be done with it.

Usage
================

```
meteor add 3stack:blaze-datetimepicker
```

Example
================


```handlebars
<div class="form-group">
  <label for="timezone">Timezone</label>
  {{#datetimepicker format='MM/YYYY' keepOpen=false viewMode='months' maxDate=currentMonth}}
    <input type="text" id="currentMonth" name="currentMonth" class="form-control"
           value="{{dateFormat 'MM/YYYY' currentMonth}}">
  {{/datetimepicker}}
</div>
```

Pass options just like:

```
{{#datetimepicker format='XYZ'}} {{! ... }} {{/datetimepicker}}
```

Note
================

You'll probably want to add a css class called
```css
.position-relative { position: relative; }
```
