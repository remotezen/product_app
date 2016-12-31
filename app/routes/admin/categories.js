import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },
  setupController(controller, model) {
    this._super(controller,model);
    controller.set('newCategory', this.store.createRecord('category'));
  },
  actions: {
    addNewCategory(newCategory) {
      newCategory.save()
        .then(
          category => {
            console.info('Response:', category);
            this.controller.set('newCategory', this.store.createRecord('category'));
          },
          error => {
            console.error('Error from server:', error);
          }
        );
    },
    deleteCategory(category) {
      category.destroyRecord();
    }
  }
});
