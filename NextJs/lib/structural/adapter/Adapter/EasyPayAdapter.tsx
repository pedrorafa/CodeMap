import { EasyPay } from "../Adapted/EasyPay";
import { IGateway } from "../Interface/IGateway";

export class EasyPayAdapter extends EasyPay implements IGateway {}
