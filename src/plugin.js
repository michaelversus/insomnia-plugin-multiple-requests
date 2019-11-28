module.exports.requestGroupActions = [
    {
      label: 'Send Requests',
      action: async (context, data) => {
        const { requests } = data;
  
        let results = [];
        for (const request of requests) {
          const response = await context.network.sendRequest(request);
          results.push(`<li>${request.name}: ${response.statusCode}</li>`);
        }
  
        const html = `<ul>${results.join('\n')}</ul>`;
  
        context.app.showGenericModalDialog('Results', { html });
      },
    },
  ];