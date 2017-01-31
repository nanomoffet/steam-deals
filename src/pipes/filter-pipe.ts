import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'FilterPipe',
  pure: false

})
@Injectable()
export class FilterPipe {
  transform(value, args) {
    // Value is undefined on app load since it's asynchronous data being loaded through http. Once it's defined, the rest
    // of the filter fires, returning all game objects that fall within the upper and lower bounds of each filter.
    if (value) {
      return value.filter(game => {
        return parseInt(game.steamRatingPercent, 10) >= args.steamRange.lower && parseInt(game.steamRatingPercent, 10) <= args.steamRange.upper
        && parseInt(game.metacriticScore, 10) >= args.metacriticRange.lower && parseInt(game.metacriticScore, 10) <= args.metacriticRange.upper
        && parseInt(game.salePrice, 10) >= args.salePriceRange.lower && parseInt(game.salePrice, 10) <= args.salePriceRange.upper
        && parseInt(game.dealRating, 10) >= (args.dealScoreRange.lower / 10) && parseInt(game.dealRating, 10) <= (args.dealScoreRange.upper / 1);
      })
    }
  }
}
