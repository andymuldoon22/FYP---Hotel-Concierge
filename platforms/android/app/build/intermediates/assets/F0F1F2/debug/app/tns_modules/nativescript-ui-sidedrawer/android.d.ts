import androidutilSparseArray = android.util.SparseArray;
import androidwidgetFrameLayout = android.widget.FrameLayout;
import androidgraphicsBitmap = android.graphics.Bitmap;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export class BlurFadeLayer extends com.telerik.android.primitives.widget.sidedrawer.DrawerFadeLayerBase {
							public constructor(param0: androidcontentContext);
							public show(): void;
							public hide(): void;
							public view(): androidviewView;
							public blurBitmap(param0: androidgraphicsBitmap): androidgraphicsBitmap;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export class BuildConfig {
							public static DEBUG: boolean;
							public static APPLICATION_ID: string;
							public static BUILD_TYPE: string;
							public static FLAVOR: string;
							public static VERSION_CODE: number;
							public static VERSION_NAME: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export class DrawerChangeListener {
							/**
							 * Constructs a new instance of the com.telerik.android.primitives.widget.sidedrawer.DrawerChangeListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onDrawerOpening(param0: com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer): boolean;
								onDrawerOpened(param0: com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer): void;
								onDrawerClosing(param0: com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer): boolean;
								onDrawerClosed(param0: com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer): void;
								onDrawerPan(param0: com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer): void;
							});
							public onDrawerOpened(param0: com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer): void;
							public onDrawerClosing(param0: com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer): boolean;
							public onDrawerClosed(param0: com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer): void;
							public onDrawerOpening(param0: com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer): boolean;
							public onDrawerPan(param0: com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export class DrawerFadeLayer {
							/**
							 * Constructs a new instance of the com.telerik.android.primitives.widget.sidedrawer.DrawerFadeLayer interface with the provided implementation.
							 */
							public constructor(implementation: {
								show(): void;
								hide(): void;
								view(): androidviewView;
							});
							public show(): void;
							public hide(): void;
							public view(): androidviewView;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export class DrawerFadeLayerBase {
							public constructor(param0: androidcontentContext);
							public show(): void;
							public hide(): void;
							public view(): androidviewView;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export class DrawerLocation {
							public static LEFT: com.telerik.android.primitives.widget.sidedrawer.DrawerLocation;
							public static TOP: com.telerik.android.primitives.widget.sidedrawer.DrawerLocation;
							public static RIGHT: com.telerik.android.primitives.widget.sidedrawer.DrawerLocation;
							public static BOTTOM: com.telerik.android.primitives.widget.sidedrawer.DrawerLocation;
							public static values(): native.Array<com.telerik.android.primitives.widget.sidedrawer.DrawerLocation>;
							public static valueOf(param0: string): com.telerik.android.primitives.widget.sidedrawer.DrawerLocation;
						}
					}
				}
			}
		}
	}
}

import androidviewanimationInterpolator = android.view.animation.Interpolator;
import androidosParcel = android.os.Parcel;
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerLocation.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export class DrawerTransition {
							/**
							 * Constructs a new instance of the com.telerik.android.primitives.widget.sidedrawer.DrawerTransition interface with the provided implementation.
							 */
							public constructor(implementation: {
								animateOpen(): void;
								animateClose(): void;
								addTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								removeTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								setDuration(param0: number): void;
								getDuration(): number;
								setInterpolator(param0: androidviewanimationInterpolator): void;
								getInterpolator(): androidviewanimationInterpolator;
								setFadeLayerOpacity(param0: number): void;
								getFadeLayerOpacity(): number;
								setProgress(param0: number): void;
								getProgress(): number;
								setMainContent(param0: androidviewView): void;
								setDrawerContent(param0: androidviewView): void;
								setFadeLayer(param0: androidviewView): void;
								setLocation(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerLocation): void;
								saveInstanceState(param0: androidosParcel, param1: number): void;
								restoreInstanceState(param0: androidosParcel): void;
								clear(): void;
							});
							public setDuration(param0: number): void;
							public animateClose(): void;
							public setFadeLayerOpacity(param0: number): void;
							public clear(): void;
							public removeTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
							public getProgress(): number;
							public setMainContent(param0: androidviewView): void;
							public setFadeLayer(param0: androidviewView): void;
							public setInterpolator(param0: androidviewanimationInterpolator): void;
							public getFadeLayerOpacity(): number;
							public setDrawerContent(param0: androidviewView): void;
							public getInterpolator(): androidviewanimationInterpolator;
							public restoreInstanceState(param0: androidosParcel): void;
							public animateOpen(): void;
							public setLocation(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerLocation): void;
							public getDuration(): number;
							public setProgress(param0: number): void;
							public saveInstanceState(param0: androidosParcel, param1: number): void;
							public addTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerTransition.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export class DrawerTransitionEndedListener {
							/**
							 * Constructs a new instance of the com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onTransitionEnded(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransition): void;
							});
							public onTransitionEnded(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransition): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.NSSideDrawer.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export class NSDrawerChangeListener {
							/**
							 * Constructs a new instance of the com.telerik.android.primitives.widget.sidedrawer.NSDrawerChangeListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onDrawerOpening(param0: com.telerik.android.primitives.widget.sidedrawer.NSSideDrawer): boolean;
								onDrawerOpened(param0: com.telerik.android.primitives.widget.sidedrawer.NSSideDrawer): void;
								onDrawerClosing(param0: com.telerik.android.primitives.widget.sidedrawer.NSSideDrawer): boolean;
								onDrawerClosed(param0: com.telerik.android.primitives.widget.sidedrawer.NSSideDrawer): void;
							});
							public onDrawerClosing(param0: com.telerik.android.primitives.widget.sidedrawer.NSSideDrawer): boolean;
							public onDrawerOpening(param0: com.telerik.android.primitives.widget.sidedrawer.NSSideDrawer): boolean;
							public onDrawerClosed(param0: com.telerik.android.primitives.widget.sidedrawer.NSSideDrawer): void;
							public onDrawerOpened(param0: com.telerik.android.primitives.widget.sidedrawer.NSSideDrawer): void;
						}
					}
				}
			}
		}
	}
}

import androidutilAttributeSet = android.util.AttributeSet;
import androidwidgetFrameLayoutLayoutParams = android.widget.FrameLayout.LayoutParams;
import androidviewKeyEvent = android.view.KeyEvent;
import androidviewMotionEvent = android.view.MotionEvent;
import androidosParcelable = android.os.Parcelable;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerFadeLayer.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerLocation.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerTransition.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.NSDrawerChangeListener.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.NSSideDrawerState.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export class NSSideDrawer {
							public static OPEN_THRESHOLD: number;
							public static CLOSE_THRESHOLD: number;
							public getTapOutsideToClose(): boolean;
							public getDrawerTransition(): com.telerik.android.primitives.widget.sidedrawer.DrawerTransition;
							public getTouchTargetThreshold(): number;
							public setMainContent(param0: androidviewView): void;
							public getIsOpen(): boolean;
							public getCloseOnBackPress(): boolean;
							public closeDrawerCore(param0: boolean): void;
							public getDrawerCloseThreshold(): number;
							public getDrawerSize(): number;
							public getDrawerContent(): androidviewView;
							public notifyOpening(): boolean;
							public setDrawerCloseThreshold(param0: number): void;
							public onTouchEvent(param0: androidviewMotionEvent): boolean;
							public notifyClosed(): void;
							public resolveFadeLayer(): com.telerik.android.primitives.widget.sidedrawer.DrawerFadeLayer;
							public notifyOpened(): void;
							public handleOnUp(param0: androidviewMotionEvent): boolean;
							public restoreState(param0: com.telerik.android.primitives.widget.sidedrawer.NSSideDrawerState): void;
							public setDrawerSize(param0: number): void;
							public handleOnDown(param0: androidviewMotionEvent): boolean;
							public setDrawerTransition(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransition): void;
							public setTouchTargetThreshold(param0: number): void;
							public handleOnMove(param0: androidviewMotionEvent): boolean;
							public getMainContent(): androidviewView;
							public setCloseOnBackPress(param0: boolean): void;
							public setIsLocked(param0: boolean): void;
							public onInterceptTouchEvent(param0: androidviewMotionEvent): boolean;
							public notifyClosing(): boolean;
							public setDrawerContent(param0: number): void;
							public onKeyUp(param0: number, param1: androidviewKeyEvent): boolean;
							public getIsLocked(): boolean;
							public onRestoreInstanceState(param0: androidosParcelable): void;
							public setIsOpen(param0: boolean): void;
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
							public addChangeListener(param0: com.telerik.android.primitives.widget.sidedrawer.NSDrawerChangeListener): void;
							public getDrawerLocation(): com.telerik.android.primitives.widget.sidedrawer.DrawerLocation;
							public onSaveInstanceState(): androidosParcelable;
							public setFadeLayer(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerFadeLayer): void;
							public setTapOutsideToClose(param0: boolean): void;
							public setDrawerLocation(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerLocation): void;
							public resolveTransition(): com.telerik.android.primitives.widget.sidedrawer.DrawerTransition;
							public drawerLayoutParams(): androidwidgetFrameLayoutLayoutParams;
							public handlePan(param0: androidviewMotionEvent): boolean;
							public getFadeLayer(): com.telerik.android.primitives.widget.sidedrawer.DrawerFadeLayer;
							public openDrawerCore(param0: boolean): void;
							public setMainContent(param0: number): void;
							public setIsOpen(param0: boolean, param1: boolean): void;
							public setDrawerContent(param0: androidviewView): void;
							public constructor(param0: androidcontentContext);
							public onGesture(param0: androidviewMotionEvent): boolean;
							public removeChangeListener(param0: com.telerik.android.primitives.widget.sidedrawer.NSDrawerChangeListener): void;
							public onTransitionEnded(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransition): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.NSSideDrawer.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export class NSSideDrawerLayout {
							public onInterceptTouchEvent(param0: androidviewMotionEvent): boolean;
							public onTouchEvent(param0: androidviewMotionEvent): boolean;
							public constructor(param0: androidcontentContext, param1: com.telerik.android.primitives.widget.sidedrawer.NSSideDrawer);
						}
					}
				}
			}
		}
	}
}

import androidosParcelableCreator = android.os.Parcelable.Creator;
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerLocation.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerTransition.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.NSSideDrawer.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export class NSSideDrawerState {
							public static CREATOR: androidosParcelableCreator<javalangObject>;
							public getIsOpen(): boolean;
							public getTapOutsideToClose(): boolean;
							public describeContents(): number;
							public writeToParcel(param0: androidosParcel, param1: number): void;
							public getTouchTargetThreshold(): number;
							public getDrawerLocation(): com.telerik.android.primitives.widget.sidedrawer.DrawerLocation;
							public getIsLocked(): boolean;
							public constructor(param0: com.telerik.android.primitives.widget.sidedrawer.NSSideDrawer, param1: androidosParcelable);
							public getTransition(): com.telerik.android.primitives.widget.sidedrawer.DrawerTransition;
							public constructor(param0: androidosParcel);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerChangeListener.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerFadeLayer.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerLocation.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerTransition.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.SideDrawerState.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export class RadSideDrawer extends androidwidgetFrameLayout {
							public static OPEN_THRESHOLD: number;
							public static CLOSE_THRESHOLD: number;
							public getTapOutsideToClose(): boolean;
							public getDrawerTransition(): com.telerik.android.primitives.widget.sidedrawer.DrawerTransition;
							public getTouchTargetThreshold(): number;
							public setMainContent(param0: androidviewView): void;
							public getIsOpen(): boolean;
							public getCloseOnBackPress(): boolean;
							public closeDrawerCore(param0: boolean): void;
							public getDrawerCloseThreshold(): number;
							public getDrawerSize(): number;
							public getDrawerContent(): androidviewView;
							public notifyOpening(): boolean;
							public setDrawerCloseThreshold(param0: number): void;
							public onTouchEvent(param0: androidviewMotionEvent): boolean;
							public notifyClosed(): void;
							public resolveFadeLayer(): com.telerik.android.primitives.widget.sidedrawer.DrawerFadeLayer;
							public notifyOpened(): void;
							public handleOnUp(param0: androidviewMotionEvent): boolean;
							public setDrawerSize(param0: number): void;
							public handleOnDown(param0: androidviewMotionEvent): boolean;
							public setDrawerTransition(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransition): void;
							public setTouchTargetThreshold(param0: number): void;
							public handleOnMove(param0: androidviewMotionEvent): boolean;
							public getMainContent(): androidviewView;
							public setCloseOnBackPress(param0: boolean): void;
							public setIsLocked(param0: boolean): void;
							public notifyPan(): void;
							public onInterceptTouchEvent(param0: androidviewMotionEvent): boolean;
							public notifyClosing(): boolean;
							public setDrawerContent(param0: number): void;
							public onKeyUp(param0: number, param1: androidviewKeyEvent): boolean;
							public getIsLocked(): boolean;
							public onRestoreInstanceState(param0: androidosParcelable): void;
							public addChangeListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerChangeListener): void;
							public setIsOpen(param0: boolean): void;
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
							public getDrawerLocation(): com.telerik.android.primitives.widget.sidedrawer.DrawerLocation;
							public onSaveInstanceState(): androidosParcelable;
							public setFadeLayer(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerFadeLayer): void;
							public setTapOutsideToClose(param0: boolean): void;
							public setDrawerLocation(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerLocation): void;
							public resolveTransition(): com.telerik.android.primitives.widget.sidedrawer.DrawerTransition;
							public handlePan(param0: androidviewMotionEvent): boolean;
							public getFadeLayer(): com.telerik.android.primitives.widget.sidedrawer.DrawerFadeLayer;
							public openDrawerCore(param0: boolean): void;
							public setMainContent(param0: number): void;
							public setIsOpen(param0: boolean, param1: boolean): void;
							public setDrawerContent(param0: androidviewView): void;
							public restoreState(param0: com.telerik.android.primitives.widget.sidedrawer.SideDrawerState): void;
							public constructor(param0: androidcontentContext);
							public onGesture(param0: androidviewMotionEvent): boolean;
							public removeChangeListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerChangeListener): void;
							public onTransitionEnded(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransition): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export class SideDrawerActivity {
							public constructor();
							public getDrawer(): com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer;
							public getCloseDrawerOnBackButton(): boolean;
							public setDrawer(param0: com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer): void;
							public setCloseDrawerOnBackButton(param0: boolean): void;
							public onBackPressed(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerLocation.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerTransition.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export class SideDrawerState {
							public static CREATOR: androidosParcelableCreator<javalangObject>;
							public getIsOpen(): boolean;
							public getTapOutsideToClose(): boolean;
							public describeContents(): number;
							public writeToParcel(param0: androidosParcel, param1: number): void;
							public getTouchTargetThreshold(): number;
							public getDrawerLocation(): com.telerik.android.primitives.widget.sidedrawer.DrawerLocation;
							public constructor(param0: com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer, param1: androidosParcelable);
							public getIsLocked(): boolean;
							public getTransition(): com.telerik.android.primitives.widget.sidedrawer.DrawerTransition;
							public constructor(param0: androidosParcel);
						}
					}
				}
			}
		}
	}
}

import androidsupportv7widgetToolbar = android.support.v7.widget.Toolbar;
import androidgraphicsdrawableDrawable = android.graphics.drawable.Drawable;
import androidviewMenuItem = android.view.MenuItem;
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.support.v7.widget.Toolbar.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export class SideDrawerToggle {
							public toggleDrawer(): void;
							public setDrawerOpenIcon(param0: number): void;
							public constructor(param0: com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer, param1: androidsupportv7widgetToolbar);
							public setDrawerOpenIcon(param0: androidgraphicsdrawableDrawable): void;
							public onDrawerOpened(param0: com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer): void;
							public setDrawerCloseIcon(param0: androidgraphicsdrawableDrawable): void;
							public onOptionsItemSelected(param0: androidviewMenuItem): boolean;
							public onDrawerClosing(param0: com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer): boolean;
							public onDrawerClosed(param0: com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer): void;
							public onDrawerOpening(param0: com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer): boolean;
							public onDrawerPan(param0: com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer): void;
							public constructor(param0: com.telerik.android.primitives.widget.sidedrawer.RadSideDrawer);
						}
					}
				}
			}
		}
	}
}

import androidcontentIntent = android.content.Intent;
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.contents.NavigationItem.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export module contents {
							export class CreateIntentCallback {
								/**
								 * Constructs a new instance of the com.telerik.android.primitives.widget.sidedrawer.contents.CreateIntentCallback interface with the provided implementation.
								 */
								public constructor(implementation: {
									createIntent(param0: com.telerik.android.primitives.widget.sidedrawer.contents.NavigationItem): androidcontentIntent;
								});
								public createIntent(param0: com.telerik.android.primitives.widget.sidedrawer.contents.NavigationItem): androidcontentIntent;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.contents.CreateIntentCallback.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.contents.NavigationItem.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.contents.NavigationItemsAdapter.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export module contents {
							export class NavigationDrawerContent {
								public setNavigationItems(param0: javautilList<javalangObject>): void;
								public onClick(param0: androidviewView): void;
								public getCreateIntentCallback(): com.telerik.android.primitives.widget.sidedrawer.contents.CreateIntentCallback;
								public onDataInvalidated(): void;
								public setCreateIntentCallback(param0: com.telerik.android.primitives.widget.sidedrawer.contents.CreateIntentCallback): void;
								public createIntentCore(param0: com.telerik.android.primitives.widget.sidedrawer.contents.NavigationItem): androidcontentIntent;
								public constructor(param0: androidcontentContext);
								public generateViews(): void;
								public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
								public onDataChanged(): void;
								public setNavigationItemsAdapter(param0: com.telerik.android.primitives.widget.sidedrawer.contents.NavigationItemsAdapter): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export module contents {
							export class NavigationItem {
								public constructor(param0: javalangClass<javalangObject>);
								public getText(): string;
								public getActivityClass(): javalangClass<javalangObject>;
								public setIntent(param0: androidcontentIntent): void;
								public getIntent(): androidcontentIntent;
								public setText(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.contents.NavigationItem.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export module contents {
							export class NavigationItemView {
								public setNavigationItem(param0: com.telerik.android.primitives.widget.sidedrawer.contents.NavigationItem): void;
								public constructor(param0: androidcontentContext);
								public getNavigationItem(): com.telerik.android.primitives.widget.sidedrawer.contents.NavigationItem;
								public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
							}
						}
					}
				}
			}
		}
	}
}

import androidviewViewGroup = android.view.ViewGroup;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.contents.NavigationItemView.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export module contents {
							export class NavigationItemsAdapter {
								public getItems(): javautilList<javalangObject>;
								public createNavigationItemView(): com.telerik.android.primitives.widget.sidedrawer.contents.NavigationItemView;
								public constructor(param0: androidcontentContext);
								public getItem(param0: number): androidutilSparseArray<javalangObject>;
								public getCount(): number;
								public getItemId(param0: number): number;
								public getView(param0: number, param1: androidviewView, param2: androidviewViewGroup): androidviewView;
								public setItems(param0: javautilList<javalangObject>): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerLocation.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export module transitions {
							export abstract class DrawerTransitionBase {
								public addTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								public animateCloseLeft(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateClose(): void;
								public onEnded(): void;
								public getMainContent(): androidviewView;
								public animateCloseTop(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setProgressLeft(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public clearCore(param0: androidviewView, param1: androidviewView): void;
								public getDrawerContent(): androidviewView;
								public animateCloseRight(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateOpen(): void;
								public setDuration(param0: number): void;
								public animateOpenLeft(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public getProgress(): number;
								public run(): void;
								public restoreInstanceState(param0: androidosParcel): void;
								public getInterpolator(): androidviewanimationInterpolator;
								public getDuration(): number;
								public animateCloseBottom(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public constructor();
								public setLocation(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerLocation): void;
								public setDrawerContent(param0: androidviewView): void;
								public removeTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								public setProgressBottom(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setProgressRight(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setProgressTop(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public clear(): void;
								public setFadeLayerOpacity(param0: number): void;
								public setInterpolator(param0: androidviewanimationInterpolator): void;
								public setMainContent(param0: androidviewView): void;
								public animateOpenBottom(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateOpenTop(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setFadeLayer(param0: androidviewView): void;
								public setProgress(param0: number): void;
								public saveInstanceState(param0: androidosParcel, param1: number): void;
								public getFadeLayerOpacity(): number;
								public animateOpenRight(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerLocation.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export module transitions {
							export class FadeTransition extends com.telerik.android.primitives.widget.sidedrawer.transitions.DrawerTransitionBase {
								public addTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								public animateCloseLeft(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateClose(): void;
								public animateCloseTop(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setProgressLeft(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public clearCore(param0: androidviewView, param1: androidviewView): void;
								public animateCloseRight(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateOpen(): void;
								public animateOpenLeft(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setDuration(param0: number): void;
								public getProgress(): number;
								public restoreInstanceState(param0: androidosParcel): void;
								public getInterpolator(): androidviewanimationInterpolator;
								public getDuration(): number;
								public animateCloseBottom(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public constructor();
								public setLocation(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerLocation): void;
								public removeTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								public setDrawerContent(param0: androidviewView): void;
								public setProgressBottom(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setProgressRight(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setProgressTop(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setFadeLayerOpacity(param0: number): void;
								public clear(): void;
								public setInterpolator(param0: androidviewanimationInterpolator): void;
								public setMainContent(param0: androidviewView): void;
								public animateOpenBottom(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateOpenTop(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setProgress(param0: number): void;
								public setFadeLayer(param0: androidviewView): void;
								public getFadeLayerOpacity(): number;
								public saveInstanceState(param0: androidosParcel, param1: number): void;
								public animateOpenRight(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerLocation.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export module transitions {
							export class FallDownTransition extends com.telerik.android.primitives.widget.sidedrawer.transitions.DrawerTransitionBase {
								public toString(): string;
								public addTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								public animateCloseLeft(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateClose(): void;
								public animateCloseTop(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setProgressLeft(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public clearCore(param0: androidviewView, param1: androidviewView): void;
								public animateCloseRight(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateOpen(): void;
								public animateOpenLeft(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setDuration(param0: number): void;
								public getProgress(): number;
								public restoreInstanceState(param0: androidosParcel): void;
								public getInterpolator(): androidviewanimationInterpolator;
								public getDuration(): number;
								public animateCloseBottom(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public constructor();
								public setLocation(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerLocation): void;
								public removeTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								public setDrawerContent(param0: androidviewView): void;
								public setProgressBottom(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setProgressRight(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setProgressTop(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setFadeLayerOpacity(param0: number): void;
								public clear(): void;
								public setInterpolator(param0: androidviewanimationInterpolator): void;
								public setMainContent(param0: androidviewView): void;
								public animateOpenBottom(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateOpenTop(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setProgress(param0: number): void;
								public setFadeLayer(param0: androidviewView): void;
								public getFadeLayerOpacity(): number;
								public saveInstanceState(param0: androidosParcel, param1: number): void;
								public animateOpenRight(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerLocation.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export module transitions {
							export class PushTransition extends com.telerik.android.primitives.widget.sidedrawer.transitions.DrawerTransitionBase {
								public toString(): string;
								public addTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								public animateCloseLeft(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateClose(): void;
								public animateCloseTop(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setProgressLeft(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public clearCore(param0: androidviewView, param1: androidviewView): void;
								public animateCloseRight(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateOpen(): void;
								public animateOpenLeft(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setDuration(param0: number): void;
								public getProgress(): number;
								public restoreInstanceState(param0: androidosParcel): void;
								public getInterpolator(): androidviewanimationInterpolator;
								public getDuration(): number;
								public animateCloseBottom(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public constructor();
								public setLocation(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerLocation): void;
								public removeTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								public setDrawerContent(param0: androidviewView): void;
								public setProgressBottom(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setProgressRight(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setProgressTop(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setFadeLayerOpacity(param0: number): void;
								public clear(): void;
								public setInterpolator(param0: androidviewanimationInterpolator): void;
								public setMainContent(param0: androidviewView): void;
								public animateOpenBottom(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateOpenTop(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setProgress(param0: number): void;
								public setFadeLayer(param0: androidviewView): void;
								public getFadeLayerOpacity(): number;
								public saveInstanceState(param0: androidosParcel, param1: number): void;
								public animateOpenRight(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerLocation.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export module transitions {
							export class RevealTransition extends com.telerik.android.primitives.widget.sidedrawer.transitions.DrawerTransitionBase {
								public toString(): string;
								public addTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								public animateCloseLeft(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateClose(): void;
								public animateCloseTop(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setProgressLeft(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public clearCore(param0: androidviewView, param1: androidviewView): void;
								public animateCloseRight(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateOpen(): void;
								public animateOpenLeft(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setDuration(param0: number): void;
								public getProgress(): number;
								public restoreInstanceState(param0: androidosParcel): void;
								public getInterpolator(): androidviewanimationInterpolator;
								public getDuration(): number;
								public animateCloseBottom(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public constructor();
								public setLocation(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerLocation): void;
								public removeTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								public setDrawerContent(param0: androidviewView): void;
								public setProgressBottom(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setProgressRight(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setProgressTop(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setFadeLayerOpacity(param0: number): void;
								public clear(): void;
								public setInterpolator(param0: androidviewanimationInterpolator): void;
								public setMainContent(param0: androidviewView): void;
								public animateOpenBottom(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateOpenTop(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setProgress(param0: number): void;
								public setFadeLayer(param0: androidviewView): void;
								public getFadeLayerOpacity(): number;
								public saveInstanceState(param0: androidosParcel, param1: number): void;
								public animateOpenRight(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerLocation.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export module transitions {
							export class ReverseSlideOutTransition extends com.telerik.android.primitives.widget.sidedrawer.transitions.DrawerTransitionBase {
								public toString(): string;
								public addTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								public animateCloseLeft(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateClose(): void;
								public animateCloseTop(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setProgressLeft(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public clearCore(param0: androidviewView, param1: androidviewView): void;
								public animateCloseRight(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateOpen(): void;
								public animateOpenLeft(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setDuration(param0: number): void;
								public getProgress(): number;
								public restoreInstanceState(param0: androidosParcel): void;
								public getInterpolator(): androidviewanimationInterpolator;
								public getDuration(): number;
								public animateCloseBottom(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public constructor();
								public setLocation(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerLocation): void;
								public removeTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								public setDrawerContent(param0: androidviewView): void;
								public setProgressBottom(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setProgressRight(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setProgressTop(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setFadeLayerOpacity(param0: number): void;
								public clear(): void;
								public setInterpolator(param0: androidviewanimationInterpolator): void;
								public setMainContent(param0: androidviewView): void;
								public animateOpenBottom(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateOpenTop(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setProgress(param0: number): void;
								public setFadeLayer(param0: androidviewView): void;
								public getFadeLayerOpacity(): number;
								public saveInstanceState(param0: androidosParcel, param1: number): void;
								public animateOpenRight(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerLocation.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export module transitions {
							export class ScaleDownPusherTransition extends com.telerik.android.primitives.widget.sidedrawer.transitions.DrawerTransitionBase {
								public toString(): string;
								public addTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								public animateCloseLeft(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateClose(): void;
								public animateCloseTop(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setProgressLeft(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public clearCore(param0: androidviewView, param1: androidviewView): void;
								public animateCloseRight(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateOpen(): void;
								public animateOpenLeft(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setDuration(param0: number): void;
								public getProgress(): number;
								public restoreInstanceState(param0: androidosParcel): void;
								public getInterpolator(): androidviewanimationInterpolator;
								public getDuration(): number;
								public animateCloseBottom(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public constructor();
								public setLocation(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerLocation): void;
								public removeTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								public setDrawerContent(param0: androidviewView): void;
								public setScaleProgress(param0: number, param1: androidviewView): void;
								public setProgressBottom(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setProgressRight(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setProgressTop(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setFadeLayerOpacity(param0: number): void;
								public clear(): void;
								public setInterpolator(param0: androidviewanimationInterpolator): void;
								public setMainContent(param0: androidviewView): void;
								public animateOpenBottom(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateOpenTop(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setProgress(param0: number): void;
								public setFadeLayer(param0: androidviewView): void;
								public getFadeLayerOpacity(): number;
								public saveInstanceState(param0: androidosParcel, param1: number): void;
								public animateOpenRight(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerLocation.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export module transitions {
							export class ScaleUpTransition extends com.telerik.android.primitives.widget.sidedrawer.transitions.DrawerTransitionBase {
								public toString(): string;
								public addTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								public animateCloseLeft(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateClose(): void;
								public animateCloseTop(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setProgressLeft(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public clearCore(param0: androidviewView, param1: androidviewView): void;
								public animateCloseRight(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateOpen(): void;
								public animateOpenLeft(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setDuration(param0: number): void;
								public getProgress(): number;
								public restoreInstanceState(param0: androidosParcel): void;
								public getInterpolator(): androidviewanimationInterpolator;
								public setScale(param0: androidviewView): void;
								public getDuration(): number;
								public animateCloseBottom(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public constructor();
								public setLocation(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerLocation): void;
								public removeTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								public setDrawerContent(param0: androidviewView): void;
								public setProgressBottom(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setProgressRight(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setProgressTop(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setFadeLayerOpacity(param0: number): void;
								public clear(): void;
								public setInterpolator(param0: androidviewanimationInterpolator): void;
								public setMainContent(param0: androidviewView): void;
								public animateOpenBottom(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateOpenTop(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setProgress(param0: number): void;
								public setFadeLayer(param0: androidviewView): void;
								public getFadeLayerOpacity(): number;
								public saveInstanceState(param0: androidosParcel, param1: number): void;
								public animateOpenRight(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerLocation.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export module transitions {
							export class SlideAlongTransition extends com.telerik.android.primitives.widget.sidedrawer.transitions.DrawerTransitionBase {
								public toString(): string;
								public addTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								public animateCloseLeft(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateClose(): void;
								public animateCloseTop(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setProgressLeft(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public clearCore(param0: androidviewView, param1: androidviewView): void;
								public animateCloseRight(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateOpen(): void;
								public animateOpenLeft(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setDuration(param0: number): void;
								public getProgress(): number;
								public restoreInstanceState(param0: androidosParcel): void;
								public getInterpolator(): androidviewanimationInterpolator;
								public getDuration(): number;
								public animateCloseBottom(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public constructor();
								public setLocation(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerLocation): void;
								public removeTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								public setDrawerContent(param0: androidviewView): void;
								public setProgressBottom(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setProgressRight(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setProgressTop(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setFadeLayerOpacity(param0: number): void;
								public clear(): void;
								public setInterpolator(param0: androidviewanimationInterpolator): void;
								public setMainContent(param0: androidviewView): void;
								public animateOpenBottom(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateOpenTop(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setProgress(param0: number): void;
								public setFadeLayer(param0: androidviewView): void;
								public getFadeLayerOpacity(): number;
								public saveInstanceState(param0: androidosParcel, param1: number): void;
								public animateOpenRight(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerLocation.d.ts" />
/// <reference path="./com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module primitives {
				export module widget {
					export module sidedrawer {
						export module transitions {
							export class SlideInOnTopTransition extends com.telerik.android.primitives.widget.sidedrawer.transitions.DrawerTransitionBase {
								public toString(): string;
								public addTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								public animateCloseLeft(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateClose(): void;
								public animateCloseTop(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setProgressLeft(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public clearCore(param0: androidviewView, param1: androidviewView): void;
								public animateCloseRight(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateOpen(): void;
								public animateOpenLeft(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setDuration(param0: number): void;
								public getProgress(): number;
								public restoreInstanceState(param0: androidosParcel): void;
								public getInterpolator(): androidviewanimationInterpolator;
								public getDuration(): number;
								public animateCloseBottom(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public constructor();
								public setLocation(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerLocation): void;
								public removeTransitionEndedListener(param0: com.telerik.android.primitives.widget.sidedrawer.DrawerTransitionEndedListener): void;
								public setDrawerContent(param0: androidviewView): void;
								public setProgressBottom(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setProgressRight(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setProgressTop(param0: number, param1: androidviewView, param2: androidviewView, param3: androidviewView): void;
								public setFadeLayerOpacity(param0: number): void;
								public clear(): void;
								public setInterpolator(param0: androidviewanimationInterpolator): void;
								public setMainContent(param0: androidviewView): void;
								public animateOpenBottom(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public animateOpenTop(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
								public setProgress(param0: number): void;
								public setFadeLayer(param0: androidviewView): void;
								public getFadeLayerOpacity(): number;
								public saveInstanceState(param0: androidosParcel, param1: number): void;
								public animateOpenRight(param0: androidviewView, param1: androidviewView, param2: androidviewView): void;
							}
						}
					}
				}
			}
		}
	}
}
