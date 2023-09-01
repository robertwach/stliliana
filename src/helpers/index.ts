import sharp from 'sharp';
import { encode } from 'blurhash';

//  import * as Storage from '@google-cloud/storage';
// import { Storage } from '@google-cloud/storage';
import path from 'path';

// import config from '../config';
// import e from 'express';


// const gcs = new Storage({
// 	keyFilename: path.join(__dirname, `../${config.GCS_KEY_NAME}`),
// 	projectId: config.GCS_PROJECT_ID
// });

// const productsBucket = gcs.bucket(config.GCS_BUCKET);



export function randomInteger(min: number, max: number): number {
	return Math.round( Math.random() * (max - min) + min);
}


export function randomString(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
// export const encodeImageToBlurhash = (imageData: any, width: number, height: number): Promise<string> =>
// new Promise((resolve, reject) => {
//   sharp(imageData)
// 	.raw()
// 	.ensureAlpha()
// 	.resize(width, height, { fit: 'inside' })
// 	.toBuffer((err, buffer, { width, height }) => {
// 		if (err) return reject(err);
// 		resolve(encode(new Uint8ClampedArray(buffer), width, height, 4, 4));
// 	});
// });

// export function resizeSave(
//     data: { file: any, fileName: string, uploadFolder: string, extension: string, width: number, height: number }
//     = {file: null, fileName:'', uploadFolder: 'products', extension: 'webp', width: 600, height:600 }) {

// 	return new Promise(function (resolve, reject) {
// 		const name = `./public/uploads/${data.fileName}.webp`;

//         if (data.file === null) {
//             throw(new Error('Image not included'));
//         }
// 		return	sharp(data.file.data)
// 			.ensureAlpha()
// 			.flatten({ background: { r: 255, g: 255, b: 255 } })
// 			.resize({
// 				fit: sharp.fit.contain,
// 				background: { r: 255, g: 255, b: 255, alpha: 1 },
// 				width: data.width,
// 				height: data.height
// 			})
// 			.webp()
// 			.toFile(name)
// 			.then(async function (info: any) {
// 				const options = { destination: `${data.uploadFolder}/${data.fileName}.webp` };
// 				await  productsBucket.upload(`${name}`, options);
// 				console.log('Image uploaded successfully');
// 				const hash = await encodeImageToBlurhash(data.file.data, data.width, data.height);
// 				return resolve({info, hash });
// 			})
// 			.catch(function (err: any) {
// 				console.log(err);
// 				return reject(err);
// 			});


// 	});
// }

// export function resizeSave(data: ImageFile) {

//     return new Promise((resolve, reject) => {
//     const name = `./public/${data.location}/${data.fileName}.${data.extension}`;
//     return	sharp(data.file.data)
//         .rotate()
//         .resize(data.width, data.height)
//         .jpeg()
//         .toFile(name)
//         .then((info) => {
//             return resolve(info);
//         })
//         .catch((err) => {
//             return reject(err);
//         });
//     });
// }
export const makeUrl = (str: string) => {
    return str.trim().toLocaleLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').split(' ').filter(s => s != '').map((v) => v?.trim()).join('-');
};

export function makeSmImageName (str: string): string {

	if (str.includes('.webp')) {
		const parts: string[] =  str.split('.webp');
		return `${parts[0]}-sm`;
	}

	return str + '-sm';

}