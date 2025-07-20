## With shouldValidate: true
- Runs the validation for "slug" after updating it
- Useful when your field has rules like:
```javascript
{...register("slug", { required: true })}
```
- Ensures the slug is validated immediately after being set

## what is the subscription mode of watch and how does it work?
- You're subscribing to form field changes, like an event listener — it reacts every time any field is updated.
- watch returns a function, not the values.
- That function gets called automatically whenever any input in the form changes.
- It gives you:
    - value: the current form values
    - name: the name of the field that changed
    - type: the event type (optional)
- This is useful for dynamic updates, like setting a slug based on the title input.
- Since watch(...) returns a subscription, you must unsubscribe to avoid memory leaks