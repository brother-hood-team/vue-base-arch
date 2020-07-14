
import Vue from "vue";
export default Vue.extend({
  name: "admin-apollo-response",
  components: {
  },
  props: {
    result: Object,
  },
  methods: {
    isLoading(): boolean {
      return (this as any).result.loading || (this as any).result.data === null;
    },
    renderLoading(h: any): any {
      return (
        <div>Loading...</div>
      );
    },
    renderErrors(h: any): any {
      const networkError = (this as any).result.error.networkError
        ? (
          <div>
            <h3 class="mb-1">{(this as any).$t("administrator.data_loader.network_error_title")}</h3>
            <p>{(this as any).result.error.networkError.message}</p>
          </div>
        )
        : null;

      const graphqlErrors = (this as any).result.error.graphQLErrors.length > 0
        ? (

          <div value={true} type="error">
            <h3 class="mb-1">{(this as any).$t("administrator.data_loader.graphql_error_title")}</h3>
            {
              (this as any).result.error.graphQLErrors.map((error: any) => {
                return (
                  <p>{error.message}</p>
                );
              })
            }
          </div>
        )
        : null;

      return (
        <div>
          {networkError}
          {graphqlErrors}
        </div>
      );
    },
  },
  render(h: any): any {
    if ((this as any).isLoading()) { return (this as any).renderLoading(h); }
    if ((this as any).result.error) { return (this as any).renderErrors(h); }
    if (!(this as any).$scopedSlots.default) { return null; }
    return (this as any).$scopedSlots.default({
      data: (this as any).result.data,
    });
  },
});
