import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const initStyle = {
  textAlign: "left",
  align: "left",
};

const codeText = `// Add in the overall transaction data
$AXIS('ecommerce:addTransaction', {
   'id': '{{ transaction.id }}',                    // Transaction ID.
   'affiliation': 'MyBiz',                          // Affiliation or store name.
   'revenue': '{{ transaction.amount }}',           // Grand Total. In float form 100.00
   'shipping': '{{ transaction.shipping.price }}',  // Shipping.
   'tax': '{{ transaction.tax }}'                   // Tax.
});
// The addItem code snippets below go here
{% for ordered_item in checkout.ordered_items %}
$AXIS('ecommerce:addItem', {
   'id': '{{ ordered_item.id }}',                // Transaction ID - same as above.
   'name': '{{ ordered_item.name }}',           // Readable product name
   'sku': '{{ ordered_item.sku }}',         // SKU 
   'category': '{{ ordered_item.category }}',   // Category
   'price': '{{ ordered_item.price }}',    // Item Price (for one)
   'quantity': '{{ ordered_item.quantity }}'              // Item Quantity
});
{% endfor %}


//Send the event
$AXIS('ecommerce:send');

var s = document.createElement('script');
s.async = true;
s.src = 'https://z.vertebrae-axis.com/scripts/transaction.js';
document.head.appendChild(s);
 
</script>`;

function TransactionTracking() {
  return (
    <div>
      <h1>Transaction Tracking</h1>
      <div style={initStyle}>
        <p>
          In order for Vertebrae to build a comprehensive analysis of conversion
          lift, revenue lift, and A/B test performance, the following code must
          be deployed across checkout pages and the order confirmation page. All
          of the values, both within overall and per-item transaction data will
          need to be configured and assigned on the client side. The below
          snippets are using example templating &#123;&#123;&#125;&#125; with an
          example data structure.
        </p>
        <p>
          NOTE: Please pass dollar amounts as floats. For example: ‘123.45’ or
          ‘275.00’{" "}
        </p>
        {/* code example */}
        <CopyBlock
          language="javascript"
          text={codeText}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
        <p>
          When properly deployed, you should see a network call similar to the
          following (many of the passthrough items above can be seen reflected
          in this API network call):
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>addTransaction:</span>
          https://api.vertebrae-axis.com/prod/event?type=transaction&type=transaction&category=tag&placementKey=637ec110&productKey=&userKey=fa21789e-80ef-4fa8-b9d7-b93668d59dbb&sessionKey=e223e7be-54c6-49a5-ad87-30dc4092befe&label=transaction&passthrough=%7B%22id%22%3A%221234Mustache%22%2C%22affiliation%22%3A%22Dapper%20Mustaches%20Inc%22%2C%22revenue%22%3A%2255.00%22%2C%22shipping%22%3A%2210.00%22%2C%22tax%22%3A%225.00%22%2C%22cachebuster%22%3A422954%7D&value=55.00
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>addItem:</span>
          https://api.vertebrae-axis.com/prod/event?type=transaction&type=transaction&category=tag&placementKey=637ec110&productKey=001_ehw&userKey=fa21789e-80ef-4fa8-b9d7-b93668d59dbb&sessionKey=e223e7be-54c6-49a5-ad87-30dc4092befe&label=item&passthrough=%7B%22id%22%3A%221234Mustache%22%2C%22name%22%3A%22Extra%20Hold%20Wax%22%2C%22sku%22%3A%22001_ehw%22%2C%22category%22%3A%22Waxes%22%2C%22price%22%3A%2220%22%2C%22quantity%22%3A%221%22%2C%22cachebuster%22%3A475302%7D&value=20.00
        </p>
        <h2>How to Validate Transaction Data</h2>
        <p>
          In order to validate that transactions are being recorded in a way
          that simplifies reporting, Vertebrae requests that you send test
          transactions that satisfy a few rules. Please additionally send us a
          screenshot of the cart used in the test transaction so we can validate
          the quantity and items included.
        </p>
        <ol>
          <li>
            Make sure to buy multiple of at least two items that Vertebrae has
            record of via your supplied product feed.
          </li>
          <ol>
            <li>
              If you purchase products Vertebrae does not have record of, there
              is no way of knowing if the values supplied in each function call
              are correct.
            </li>
            <li>
              If SKUs mismatch, between what Vertebrae has record of and what is
              supplied in the SKU data, Vertebrae MUST have a mapping of the
              products to SKUs.
            </li>
            <li>
              In order to have our ROI calculations be accurate, we need to
              accurately know how many of each product is purchased.
            </li>
            <li>
              We want to validate that transactions are including all of the
              items in each cart.
            </li>
          </ol>
          <li>
            Email the following details to Vertebrae: transaction ID, associated
            items (& quantity) purchased
          </li>
          <ol>
            <li>Make sure each test transaction is a separate ID. </li>
            <li>
              If Vertebrae’s transaction tracking script is deployed in
              production before the official launch date, it can be extremely
              hard to track down the test order.
            </li>
          </ol>
        </ol>
      </div>
    </div>
  );
}

export default TransactionTracking;
