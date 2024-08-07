import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = '../../assets/data.json';
  constructor(private http: HttpClient) { }

  getMovie(type: string, page: number): Observable<any> {
    return this.http.get<any>(this.dataUrl).pipe(
      map((data) => {
        const pageData = data[type]?.pages?.find((p: any) => p.page === page);
        if (pageData) {
          console.log(pageData);
          return pageData;
        } else {
          return [];
        }
      }),
    );
  }
  getDetail(type:string, id:number):Observable<any>{
    return this.http.get<any>(this.dataUrl).pipe(
      map((data)=>{
        const idData = data[type]?.find((p:any)=>p.id==id);
        if(idData){
          return idData;
        }
        else{
          return [];
        }
      })
    )
  }
  getReviews(type:string,id:number,page:number):Observable<any>{
    return this.http.get<any>(this.dataUrl).pipe(
      map((data)=>{
        const reviewData=data[type]?.find((p:any)=> p.page==page && p.id==id);
        if(reviewData){
          return reviewData;
        }
        else{
          return [];
        }
      }
    ))
  }
  getCredits(type:string,id:number):Observable<any>{
    return this.http.get<any>(this.dataUrl).pipe(
      map((data)=>{
        const creditData=data[type]?.find((p:any)=> p.id==id);
        if(creditData){
          return creditData;
        }
        else{
          return [];
        }
      }
    ))
  }
  getVideo(type:string,id:number):Observable<any>{
    return this.http.get<any>(this.dataUrl).pipe(
      map((data)=>{
        const videoData=data[type]?.find((p:any)=> p.id==id);
        if(videoData){
          return videoData;
        }
        else{
          return [];
        }
      }
    ))
  }
  getRecommendations(type:string,page:number):Observable<any>{
    return this.http.get<any>(this.dataUrl).pipe(
      map((data)=>{
        const recommendData=data[type]?.find((p:any)=> p.page==page);
        if(recommendData){
          return recommendData;
        }
        else{
          return [];
        }
      }
    ))
  }
}
