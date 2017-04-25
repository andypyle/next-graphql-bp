import DataLoader from 'dataloader';
import R from 'ramda';

const oneObjectFn = async keys => {
	return R.map(k => `Value for key: ${k}`, keys);
}
export const oneObject = req => new DataLoader(oneObjectFn);