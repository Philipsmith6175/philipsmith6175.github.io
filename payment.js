<form>
  <script type="text/javascript" src="https://klastatic.fra1.digitaloceanspaces.com/test/js/klasha-integration.js"></script>
  <button type="button" onClick="payWithKlasha()">Pay</button>
</form>
<script>
function payWithKlasha() {
        var kit = {
            currency: "NGN",
            phone_number: "09012332122",
            email: "test@klasha.com",
            fullname: "Klasha",
            tx_ref: "tnxRef",
            callBack: callWhenDone
	}
        var client = new KlashaClient("{merchantKey}", 1, "amount", "ktest", "callback", "NGN", "USD", kit);
	client.init();
    }
    
    function callWhenDone(data) {
        console.log(data);
    }
</script>
{
   "amount": 560,
   "currency": "NGN",
   "status": "successful",
   "tnxRef": "tnxRef"
}
{
  "event": "charge.completed",
  "data": {
    "createdAt": "2021-11-18T15:23:16.781",
    "narration": "CARD Transaction ",
    "destinationCurrency": "NGN",
    "sourceAmount": 1,
    "sourceCurrency": "USD",
    "tnxRef": "tnxRef",
    "status": "successful",
    "destinationAmount": 560,
    "customer": {
      "id": 13,
      "name": "Klasha",
      "email": "test@klasha.com",
      "phone": "09012332122",
      "createdAt": "2021-07-20 10:28:43",
      "updatedAt": "2021-07-20 10:28:43"
    }
  }
}
