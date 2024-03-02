export default function Form() {
    return (
        <div>
        <h1>Checkout</h1>

        <form>
            <fieldset>
                <label htmlFor="ship-address">Shipping address: </label>
                <input type="text" id="ship-address" name="ship-address" />
            </fieldset>
            <fieldset>
                <label htmlFor="bill-address">Billing address: </label>
                <input type="text" id="bill-address" name="bill-address" />
            </fieldset>
            <fieldset>
                <label htmlFor="total">Total: </label>
                <input type="text" id="total"/>
            </fieldset>
            <input type="submit" value="Submit" />
        </form>
        </div>
    );
}
