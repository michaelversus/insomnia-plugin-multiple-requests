module.exports.requestGroupActions = [
  {
    label: "Send Requests",
    action: async (context, data) => {
      const { requests } = data;

      let results = [];
      for (const request of requests) {
        const response = await context.network.sendRequest(request);
        const style =
          response.statusCode !== 200
            ? "padding:5px; color: var(--color-font-danger); background: var(--color-danger)"
            : "padding:5px; color: var(--color-font-success); background: var(--color-success)";
        results.push(
          `<li style="margin: 5px">${request.name}: <span style="${style}")>${response.statusCode}</span></li>`
        );
      }

      const html = `<ul style="column-count: ${
        results.length > 10 ? 2 : 1
      };">${results.join("\n")}</ul>`;

      context.app.showGenericModalDialog("Results", { html });
    },
  },
];
