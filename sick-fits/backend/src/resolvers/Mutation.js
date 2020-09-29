const Mutations = {
  async createItem(parent, args, ctx, info) {
    //TODO check if logged in
    const { itemCreateInput } = args;
    const newItem = await ctx.db.mutation.createItem(
      {
        data: {
          ...itemCreateInput,
        },
      },
      info
    );
    return newItem;
  },
};

module.exports = Mutations;
