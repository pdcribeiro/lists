const items = [];

export default {
  async connect() {},
  async findItems() {
    return [...items];
  },
  async createItem(text, position) {
    const id = generateId();
    const item = { id, text };
    insertItem(item, position);
    console.debug('item created');
    return item;
  },
  async updateItemText(item, text) {
    item.text = text;
    console.debug('item text updated');
  },
  async moveItem(from, to) {
    if (from != to) {
      const item = items[from];
      removeItem(from);
      insertItem(item, to);
      console.debug('item moved');
    }
  },
  async deleteItem(position) {
    removeItem(position);
    console.debug('item deleted');
  },
  // items: {
  //   async list() {},
  //   async add(documents) {},
  //   async move(it, pile) {},
  // },
};

function generateId() {
  return Math.random();
}
function insertItem(item, position) {
  items.splice(position, 0, item);
}
function removeItem(position) {
  items.splice(position, 1);
}
