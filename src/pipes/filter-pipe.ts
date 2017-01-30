import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'FilterPipe',
  pure: false

})
@Injectable()
export class FilterPipe {
  transform(value, args) {
    if (value) {
      return value.filter(game => {
        return parseInt(game.steamRatingPercent, 10) >= args.steamRange.lower && parseInt(game.steamRatingPercent, 10) <= args.steamRange.upper
        && parseInt(game.metacriticScore, 10) >= args.metacriticRange.lower && parseInt(game.metacriticScore, 10) <= args.metacriticRange.upper
        && parseInt(game.salePrice, 10) >= args.salePriceRange.lower && parseInt(game.salePrice, 10) <= args.salePriceRange.upper
        && parseInt(game.dealRating, 10) >= (args.dealScoreRange.lower / 10) && parseInt(game.dealRating, 10) <= (args.dealScoreRange.upper / 10);
      })
    }
  }
}
