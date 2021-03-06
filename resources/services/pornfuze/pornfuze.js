/*
*
* This file is part of xVideoServiceThief,
* an open-source cross-platform Video service download
*
* Copyright (C) 2007 - 2009 Xesc & Technology
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with xVideoServiceThief. If not, see <http://www.gnu.org/licenses/>.
*
* Contact e-mail: Xesc <xeskuu.xvst@gmail.com>
* Program URL   : http://xviservicethief.sourceforge.net/
*
*/

function RegistVideoService()
{
	this.version = "1.0.0";
	this.minVersion = "2.0.0a";
	this.author = "Xesc & Technology 2009";
	this.website = "http://pornfuze.com/";
	this.ID = "pornfuze.com";
	this.caption = "Porn Fuze";
	this.adultContent = true;
	this.musicSite = false;
}

function getVideoInformation(url)
{
	// init result
	var result = new VideoDefinition();
	// download webpage
	var http = new Http();
	var html = http.downloadWebpage(url);
	// get video information
	result.title = copyBetween(html, "<h1>", "</h1>");
	result.URL = copyBetween(html, "file=", "&");
	// return the video information
	return result;
}

function getVideoServiceIcon()
{
	return new Array(
		0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a,0x00,0x00,0x00,0x0d,0x49,0x48,0x44,0x52,
		0x00,0x00,0x00,0x10,0x00,0x00,0x00,0x10,0x08,0x06,0x00,0x00,0x00,0x1f,0xf3,0xff,
		0x61,0x00,0x00,0x00,0x09,0x70,0x48,0x59,0x73,0x00,0x00,0x0b,0x13,0x00,0x00,0x0b,
		0x13,0x01,0x00,0x9a,0x9c,0x18,0x00,0x00,0x01,0x90,0x49,0x44,0x41,0x54,0x38,0x8d,
		0xd5,0x52,0xbb,0x4a,0x03,0x41,0x14,0x3d,0xb3,0xbb,0x49,0x36,0x31,0x1a,0x12,0x41,
		0x56,0x04,0xa3,0x10,0x83,0x60,0x21,0xa9,0x05,0x5f,0x60,0x61,0x10,0x4b,0x1b,0x2b,
		0xf1,0x0b,0xd2,0xf8,0x01,0xb6,0x96,0x7e,0x80,0x85,0x45,0x3e,0xc0,0x26,0x96,0x36,
		0x76,0x6a,0x63,0x23,0x96,0x81,0x24,0x06,0x82,0x79,0x08,0xc9,0x66,0x77,0x66,0x9c,
		0xd9,0x9d,0x4d,0x50,0xf3,0xa8,0x3d,0x70,0x77,0xf6,0xb2,0xf7,0x9c,0x7b,0xee,0x9d,
		0x25,0xcd,0xe2,0x2e,0xe7,0x8e,0x0b,0xd6,0x17,0x61,0x3b,0xe0,0x3d,0xc7,0x3b,0x65,
		0xce,0x6d,0x11,0xae,0x0c,0x86,0x71,0xd0,0xb8,0x4b,0xc1,0x1c,0x0a,0x2e,0x09,0x52,
		0x44,0x88,0x71,0x99,0xcb,0x53,0x7c,0xe3,0x74,0x3c,0xd9,0x17,0x50,0x64,0xa6,0x82,
		0xf7,0xa9,0x12,0x61,0x3e,0x99,0x4f,0xe4,0x43,0xf3,0x8b,0xdd,0x81,0x03,0x1e,0x38,
		0xa0,0x54,0x90,0xa7,0xb0,0x05,0x0c,0x49,0x2a,0x7f,0x74,0x71,0x55,0xaa,0x81,0x33,
		0xd5,0x95,0x71,0x24,0x4d,0x82,0xf3,0x5c,0x1c,0x56,0x5c,0xc7,0x63,0xd9,0xc6,0xdd,
		0x5b,0x17,0x0e,0x1b,0x0a,0xe6,0xd7,0xa2,0xd8,0x5f,0x35,0x61,0x48,0xdb,0x8d,0xb6,
		0x8d,0xe2,0x53,0x13,0x3a,0x01,0xc2,0xe2,0xe1,0x8a,0x42,0x31,0x01,0x2a,0x6d,0x8a,
		0xeb,0x7c,0x12,0x85,0xfb,0x4f,0x54,0x3a,0x14,0x11,0x5d,0x58,0x26,0xc4,0x13,0xc8,
		0xce,0x1b,0xbe,0x80,0x6f,0xdb,0x5f,0xd4,0xf1,0x7a,0x0c,0x97,0x7b,0x09,0xd4,0x44,
		0xf1,0xc1,0x6d,0x1d,0x4d,0x9b,0x79,0x53,0xb4,0x7a,0x4c,0x38,0xd1,0x50,0x3a,0x5d,
		0x80,0xae,0xf9,0x02,0xa6,0x41,0xd4,0x08,0x6a,0xdb,0x12,0xef,0x0d,0x07,0x37,0x2f,
		0x5f,0xa8,0x76,0xe8,0x9f,0x59,0x5b,0x3d,0xee,0x39,0x09,0x70,0xb2,0x31,0x83,0xa3,
		0x6c,0x54,0x8c,0x20,0x17,0xa6,0x04,0x5e,0xeb,0x8e,0x17,0x12,0x52,0x7f,0x7b,0x39,
		0x32,0x20,0xd8,0x94,0xe3,0xb9,0xda,0x1f,0xe4,0x3b,0x69,0x33,0x70,0x30,0xbc,0xeb,
		0xc3,0x8c,0x89,0x8b,0xad,0x39,0xef,0x3d,0x16,0xd2,0xb0,0x28,0x6c,0x07,0x7b,0x5b,
		0x49,0xe8,0x78,0x38,0xb3,0x46,0xdc,0x82,0xec,0xae,0xaa,0x66,0x23,0x1a,0x32,0xa9,
		0xd0,0xcf,0x8a,0x29,0x57,0x69,0x40,0x74,0x8f,0x86,0x08,0x72,0x56,0x08,0x69,0xd1,
		0xe5,0x37,0xe4,0xd2,0x37,0xad,0x30,0x52,0xa6,0x36,0x52,0x80,0x94,0x0b,0x4b,0xd3,
		0xff,0x96,0x09,0x18,0x2d,0xfb,0xaf,0x04,0xbe,0x01,0xad,0xce,0xea,0x43,0x08,0xa3,
		0x24,0xb3,0x00,0x00,0x00,0x00,0x49,0x45,0x4e,0x44,0xae,0x42,0x60,0x82);
}
